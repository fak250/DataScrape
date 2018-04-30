var post=document.getElementsByClassName("_5jmm");
// var posts_header=document.getElementsByClassName("_5pbx");

posts_text=[];



// for (i=0; i<posts_header.length; i++){
// 	posts_text.push(posts_header[i].textContent)
// }

posts_ref=[];
for(i=0;i<post.length;i++){
    posts_ref.push(post[i].querySelectorAll("_5pbx"));
	posts_ref.push("new post");
}

posts_text=[];
for(i=0; i<posts_ref.length; i++){
	if (y!="new post"){
		posts_text.push(posts_ref[i].textContent);
	}
	else{
		posts_text.push("new post");
	}
}


var a = document.createElement('a');
var file = new Blob([ posts_text.toString() ], { type: 'text/plain' });

a.href = URL.createObjectURL(file);
a.download = 'posts_text';
a.click();


comments_ref=[];
for(i=0;i<post.length;i++){
    comments_ref.push(post[i].querySelectorAll(".UFICommentBody"));
comments_ref.push("new post");
}

comments_text=[];
for(i=0; i<comments_ref.length; i++){
	var x=comments_ref[i];
	if (x!="n"){
		for (j=0; j<x.length; j++){
			comments_text.push(x[j].textContent);
		}
	}
	else{
		comments_text.push("new post");
	}
}

var b = document.createElement('b');
var file = new Blob([ comments_text.toString() ], { type: 'text/plain' });

a.href = URL.createObjectURL(file);
a.download = 'comments_text';
a.click();
