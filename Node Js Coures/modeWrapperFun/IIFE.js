/* --------Immediately Invoked Function Expression (IIFE)--------- */
/*
--> yasako bitra lekhne data sabai private nai hunxa
--> automatically run hunxa
define garne bitikai run hunxa 
design pattern ho self-ececuting anoymous function and contains two major parts
-> grouping operator
-> create garxa ani immediately call garxa
 */

/*(function () {
  var name = "Don"
  console.log("Author Name : Sunil" + name)
})()*/

;(function (name) {
  console.log("Author Name : Sunil" + name)
})(" Don")
