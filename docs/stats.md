---
title: cicsdev stats
---

## Just testing

```js
const base64 = FileAttachment("data/stats/base64.csv").csv({typed: true});
```

```js
Plot.rectY(base64, {x: "date", y: "clones_total"}).plot()
```
