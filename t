[1mdiff --git a/controllers/users/create.js b/controllers/users/create.js[m
[1mindex e69de29..4cf3782 100644[m
[1m--- a/controllers/users/create.js[m
[1m+++ b/controllers/users/create.js[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32mconst create = (req, res) => {[m
[32m+[m[32m  res.send('POST /users')[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mmodule.exports = create[m
[1mdiff --git a/controllers/users/delete.js b/controllers/users/delete.js[m
[1mindex e69de29..40b5080 100644[m
[1m--- a/controllers/users/delete.js[m
[1m+++ b/controllers/users/delete.js[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32mconst del = (req, res) => {[m
[32m+[m[41m  [m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mmodule.exports = del[m
[1mdiff --git a/controllers/users/readAll.js b/controllers/users/readAll.js[m
[1mindex e69de29..9764f37 100644[m
[1m--- a/controllers/users/readAll.js[m
[1m+++ b/controllers/users/readAll.js[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32mconst readAll = (req, res) => {[m
[32m+[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mmodule.exports = readAll[m
[1mdiff --git a/controllers/users/readOne.js b/controllers/users/readOne.js[m
[1mindex e69de29..12ce55a 100644[m
[1m--- a/controllers/users/readOne.js[m
[1m+++ b/controllers/users/readOne.js[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32mconst readOne = (req, res) => {[m
[32m+[m[41m  [m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mmodule.exports = readOne[m
[1mdiff --git a/controllers/users/update.js b/controllers/users/update.js[m
[1mindex e69de29..960cc05 100644[m
[1m--- a/controllers/users/update.js[m
[1m+++ b/controllers/users/update.js[m
[36m@@ -0,0 +1,5 @@[m
[32m+[m[32mconst update = (req, res) => {[m
[32m+[m[41m  [m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mmodule.exports = update[m
