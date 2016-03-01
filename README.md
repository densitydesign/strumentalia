# Strumentalia
Strumentalia is a collection of useful tools for running web epistemology analysis.

### Submodules
We wrote every single tool as a stand alone web-application, so that it is possible for you to locally install just the ones you need.
In order to collect them in Strumentalia, we added them as submodules (read  [here](https://gist.github.com/gitaarik/8735255), [here]( https://gist.github.com/necolas/2215692) and [here](https://medium.com/@porteneuve/mastering-git-submodules-34c65e940407#.n4spxh6tf)).
 If you have any issue, question or pull request please address it to the repository of the tool you are referencing to.

###### Installation
Install Strumentalia from scratch and get all the submodules installed in one shoot:

- `git clone --recursive https://github.com/densitydesign/strumentalia.git`

Optional: you may want to activate this:

- `git config --global status.submoduleSummary true`

If you cloned the repository without `--recursive`, you need to manually add submodules:

1. `git submodule init`
2. `git submodule update`

How to install a general submodule:

- `git submodule add https://github.com/link-to-submodule.git app/tools/new-submodule-folder`

The directory with the submodule is itself a repository, so when you edit it, pay attention: [here](https://gist.github.com/gitaarik/8735255#pushing-updates-in-the-submodule) is why.
