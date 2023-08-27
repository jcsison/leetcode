#!/bin/bash

# Define the bash completion script
read -r -d '' BASH_COMPLETION_SCRIPT <<'EOM'
_bun_check_completions() {
  # Check if the current command is 'bun check'
  if [ "${COMP_WORDS[1]}" = "check" ] && [ -d "./problems/" ]; then
    local current="${COMP_WORDS[COMP_CWORD]}"
    COMPREPLY=( $(compgen -W "$(ls ./problems/)" -- "$current") )
  fi
}
complete -F _bun_check_completions bun
EOM

# Define the zsh completion script
read -r -d '' ZSH_COMPLETION_SCRIPT <<'EOM'
# Autocompletion for bun check
_bun_check_completions() {
  local -a subcmds
  if [[ "${words[1]}" = "check" ]] && [ -d "./problems/" ]; then
    subcmds=($(ls ./problems/))
    _describe 'directories' subcmds
  fi
}
compdef _bun_check_completions bun
EOM

if [[ $SHELL == *"bash"* ]]; then
  # Check and install bash completion
  if grep -q "_bun_check_completions" ~/.bashrc; then
    echo "Auto-completion script is already installed in .bashrc."
  else
    echo -e "\n$BASH_COMPLETION_SCRIPT" >>~/.bashrc
    echo "Auto-completion script has been added to .bashrc."
    echo "Please restart your terminal or run 'source ~/.bashrc' for the changes to take effect."
  fi
elif [[ $SHELL == *"zsh"* ]]; then
  # Check and install zsh completion
  if grep -q "_bun_check_completions" ~/.zshrc; then
    echo "Auto-completion script is already installed in .zshrc."
  else
    echo -e "\n$ZSH_COMPLETION_SCRIPT" >>~/.zshrc
    echo "Auto-completion script has been added to .zshrc."
    echo "Please restart your terminal or run 'source ~/.zshrc' for the changes to take effect."
  fi
else
  echo "Unsupported shell. The auto-completion script was not installed."
fi
