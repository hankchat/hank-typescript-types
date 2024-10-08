chooser := "grep -v choose | fzf --tmux"
# Display this list of available commands
@list:
    just --justfile "{{ source_file() }}" --list

alias c := choose
# Open an interactive chooser of available commands
[no-exit-message]
@choose:
    just --justfile "{{ source_file() }}" --chooser "{{ chooser }}" --choose 2>/dev/null

alias e := edit
# Edit the justfile
@edit:
    $EDITOR "{{ justfile() }}"

build:
    npm run build

[confirm("Are you sure?")]
clean:
    git reset --hard
    git clean -f .

commit: build
    git add -u
    git add src/
    git commit -m "Add generated types"

publish version="patch": build
    npm version {{ version }}
    npm publish
    git push --follow-tags

types protos="protos": && build
    npm ci
    rm -rf src/*
    protos="$(find {{ protos }} -iname "*.proto" | xargs)" && \
    protoc --proto_path={{ protos }} \
        --plugin=node_modules/.bin/protoc-gen-ts_proto \
        --ts_proto_opt=exportCommonSymbols=false \
        --ts_proto_opt=env=node \
        --ts_proto_opt=oneof=unions-value \
        --ts_proto_out=src \
        $protos
    perl -p -i -e 's/interface Rpc/export interface Rpc/' src/hank.ts
    find src -type f -print | awk '{print length($0), $0}' | sort -n -r | cut -d ' ' -f2 | perl -p -e 's~src/(.*)\.ts~export * from "./$1";~' > exports.txt
    git checkout HEAD -- src/index.ts
    awk 'BEGIN {p=1} /^\/\/ @@proto-exports-begin/ { print; system("cat exports.txt"); p=0 } /^\/\/ @@proto-exports-end/ { p=1 } p' src/index.ts \
        > src/index.ts.tmp && mv src/index.ts{.tmp,}
    rm exports.txt
