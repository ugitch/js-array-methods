I have been anxious to begin TDD with function equivalents of Array.Prototype methods. As I have one Git repository for all Watch & Code code, I didn't separate this assignment into a separate Git repository. I thought I'll do it later or just copy methods without the Git history. I went once through all methods without sneaking in on the code of others, but then I lost momentum in the very end when I was left with last 2 methods. From then on, I created new Git repository copying my existing code and searching for an inspiration and good practices from others. So, some Git history is there, so I decided not to go through possibly cumbersome exercise of retaining all of the Git history.

Thanks @chujunlu for inspiration, test for TypeErrror on find() and findIndex(). It's important to break the function to know how to make one! Also, thanks for reminder that reduceRight should work for arrayLike objects, as well!
Also, for test about nested arrays in join.html. Good catch!

Thanks, @clickys, for a test specification, not to give array holes special treatment in includes().

Though being aware of ternary operator and using it, thanks @joooda for the convenient ternary inspiration in find() and findIndex().

Thanks @janelledement for reminding me I don't need an extra variable for callback binding.

Thanks @kyleknaggs for reminding me to test whether callback is run at all.

@vincenttern, some interesting views, but very imprecise.

I hope others will learn something from my code as I did from code of others ;)