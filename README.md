# visual-strace

In browser client side visual [strace](https://en.wikipedia.org/wiki/Strace)
(Linux only) representation, showing forks, execves and exit status based on a
strace run.

Graph building and representation is done with [cytoscape.js](https://js.cytoscape.org/).

Example output:
[https://lhoursquentin.github.io/visual-strace/](https://lhoursquentin.github.io/visual-strace/)
showing a [system-summary](https://github.com/lhoursquentin/system-summary)
run, slowed down 200'000 times.

# How to change the default example

Use the provided `strace-cmd` shell script helper used to fetch the output of
strace and embed it in a js file (`strace-output.js`)
```sh
$ ./strace-cmd <your executable> [args]...
```

Note that this overwrites the contents of `example-strace-output.js`.

Then open `index.html` in your browser, load the example, and you're done!
