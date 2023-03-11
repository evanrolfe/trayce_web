# PnTest Website

(Mac) install `brew install fswatch`

```
python3 -m pip install pelican
fswatch -0 ./pages/ | xargs -0 -n 1 -I {} python3 generate.py
```

