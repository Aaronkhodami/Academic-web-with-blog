@echo off
echo Starting local development server...
echo The site will be available at http://localhost:4000
echo Check the console output below for any errors.
echo.

cd /d "%~dp0"

:: Try to run with bundle exec first (recommended)
call bundle exec jekyll serve --livereload --open-url

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo 'bundle exec' failed or was stopped. 
    echo Please ensure you have Ruby and Bundler installed.
    echo You can try running 'bundle install' first if gems are missing.
    pause
)
