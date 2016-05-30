# angular-utilities
Some Utility Services and Filters I have been using in most of my projects

# directives

## au-on-enter
Can be used on textbox, On pressing enter when textbox is focussed. This will trigger function called.

## au-show-focus
When a page has number of controls, and you want to focus a particular element when view is rendered. Then you can use this.

```
<input type="text" ng-model="scopeVariable" au-show-focus />
```

# filters

##auPadZerosInFront

Adds zeroes infront of a number
variable | auPadZerosInFront : (digits)


# To Do

## filters
Ellipsis: To round the length of the text to specified number of characters.
Source: http://stackoverflow.com/questions/18095727/limit-the-length-of-a-string-with-angularjs
