

Press `Esc` to enter Normal mode. `<leader>` means `Space`.

## Files and search

```text
Space Space     Find files in the project
Space /         Search text across the project
Space e         Toggle file explorer
Space ,         Switch between open buffers
Space f r       Open recent files
Space w         Save current file
```

## Buffers

```text
Shift h         Previous buffer
Shift l         Next buffer
Space b d       Close current buffer
Space b o       Close all other buffers
Space b b       Select a buffer
```

## Modes and new lines

```text
i               Insert before cursor
a               Insert after cursor
I               Insert at beginning of line
A               Insert at end of line
o               New line below
O               New line above
Esc             Return to Normal mode
```

## Movement

```text
h j k l         Left, down, up, right
w               Next word
b               Previous word
e               End of word
0               Start of line
^               First non-space character
$               End of line
gg              Top of file
G               Bottom of file
50G             Go to line 50
%               Matching bracket or tag
Ctrl d          Half-page down
Ctrl u          Half-page up
```

## Editing

```text
x               Delete character
dd              Delete line
D               Delete to end of line
yy              Copy line
p               Paste after cursor
P               Paste before cursor
u               Undo
Ctrl r          Redo
.               Repeat last change
J               Join with next line
yw              Copy sentence (must set cursor at)
v(nav)y         Copy where selected
de              Delete sentence (must set cursor at)
v(nav)d         Delete where selected
```

## Text objects

```text
ciw             Change current word
diw             Delete current word
ci"             Change inside quotes
di"             Delete inside quotes
ci(             Change inside parentheses
ci{             Change inside braces
cit             Change inside HTML or JSX tag
dit             Delete inside HTML or JSX tag
dat             Delete the complete tag
```

## Search and replace

```text
/text           Search forward
?text           Search backward
n               Next result
N               Previous result
*               Search for word under cursor
Space s h       Clear search highlighting
:%s/old/new/g   Replace all matches
:%s/old/new/gc  Replace all with confirmation
```

## Code navigation

```text
gd              Go to definition
gr              Find references
K               Show documentation
Space c a       Code actions
Space c r       Rename symbol
Space c f       Format current file
]d              Next diagnostic
[d              Previous diagnostic
Space x x       Open diagnostics
```

## Visual selection

```text
v               Select characters
V               Select lines
Ctrl v          Rectangular selection
y               Copy selection
d               Delete selection
>               Indent selection
<               Unindent selection
=               Reindent selection
gg=G            Reindent entire file
```

## Windows and splits

```text
Space |         Vertical split
Space -         Horizontal split
Ctrl h          Move to left window
Ctrl j          Move to lower window
Ctrl k          Move to upper window
Ctrl l          Move to right window
Ctrl w q        Close current window


## Terminal

```text
Ctrl /          Toggle terminal
Ctrl-\ Ctrl-n   Leave Terminal mode
Shift h         Previous buffer
Space b d       Close terminal buffer
```

## File explorer

```text
Space e         Toggle explorer
Enter           Open file or folder
a               Create file or folder
r               Rename
d               Delete
y               Copy
p               Paste
q               Close explorer
```

## Git

```text
Space g g       Open LazyGit
Space g b       Git blame
]h              Next Git change
[h              Previous Git change
Space g h p     Preview Git change
```

## Best shortcuts to learn first

```text
Space Space
Space /
Space e
Space w
Shift h / Shift l
Space b d
ciw
cit
gd
K
Space c f
Ctrl /
```

Press `Space` and wait to display LazyVim's WhichKey menu.
