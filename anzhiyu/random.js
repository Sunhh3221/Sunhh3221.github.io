var posts=["2025/06/12/Java8-接口的默认方法和静态方法/","2025/04/30/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };