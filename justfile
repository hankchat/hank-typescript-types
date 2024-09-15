chooser := "grep -v choose | fzf --tmux"
protos := `find protos/* -iname "*.proto" | xargs`

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

types:
    rm -rf src/*
    protoc --proto_path=protos \
        --plugin=node_modules/.bin/protoc-gen-ts_proto \
        --ts_proto_opt=env=node \
        --ts_proto_opt=outputIndex=true \
        --ts_proto_out=src \
        {{ protos }}
    perl -p -i -e 's/interface Rpc/export interface Rpc/' src/hank.ts
