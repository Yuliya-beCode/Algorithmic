# Algorithmic

Algorithmic conventions
Comments

```
// this is a
// multi lines
// comment
```

# Operators
# Calculus

    plus or +

    minus or -

    multiply or *

    divide or /

    modulo or mod

# Conditions

    equal to or ==

    greater than or >

    greater than or equal to or >=

    smaller than or <

    smaller than or equal to or <=

# Variables

```

// To declare a variable you must first give its type then its name.

// In case of a constant you must give the value on declaration.
// The naming convention for constant is "CONSTANT_NAME".
constant NAME = "John Doe"

// You can assign a value during or after the declaration.
// The naming convention for variables is "variable_name".
integer nbr
character char = "c"

// To call a variable you must prefix it with "$".
$nbr = 42
```

# Conditions

```
Is statement
if (condition) then {
	// instructions
} else if (condition) then {
	// instructions
} else {
	// instructions
}

// Case of statement
in case $variable equal {
	first choice:
		// instructions
	second choice:
		// instructions
	default:
		// instructions
}
```

# Loops


```
for loops with steps of one
for $variable equal to number until number do {
	// instructions
}

// for loop with custom steps
for $variable = number until number by steps of number do {
	// instructions
}


// While statement
while (condition) do {
	// instructions
}

// Repeat until statement
repeat {
	// instructions
} until (condition)

```

# Arrays

```
// Declare an array
array table = [value_0,value_1,value_2,etc...]

// Change one of the value
$table[index] = "new value"

// Add a value
add_value("new value",$table)

// Remove a value
remove_value($table[index])
```

# Functions

```

// Predefined functions
output("example of output")
input("desired input",$variable)
random(number)
is_letter(char)
is_number(char)
is_lowercase(char)
lowercase(char)
is_uppercase(char)
uppercase(char)
typeof(variable)
sub_string(string,position,length)
position(string,sub-string)
number(string)
string(number)

// Special instruction
returns "desired data to return"
break
stop

// Custom functions
function name(parameters) {
	// instructions
}
```


