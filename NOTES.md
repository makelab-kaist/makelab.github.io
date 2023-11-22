# Running Jekyll

To run Jekyll make sure you are using Ruby 2.7

```
mcr.microsoft.com/devcontainers/jekyll:2.7-bullseye
```

Alternatively, you need to run these commands manually.  Assuming to be on Fish shell:

```
rvm install ruby-2.7.2
rvm 2.7
bundle install
bundle exec jekyll serve
bundle exec jekyll serve --livereload
```
