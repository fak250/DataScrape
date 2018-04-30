var post=document.getElementsByClassName("_5jmm");
var posts_header=document.getElementsByClassName("_5pbx");

posts_text=[];



for (i=0; i<posts_header.length; i++){
	posts_text.push(posts_header[i].textContent)
}



var a = document.createElement('a');
var file = new Blob([ posts_text.toString() ], { type: 'text/plain' });

a.href = URL.createObjectURL(file);
a.download = 'posts_text';
a.click();


comments_ref=[];
for(i=0;i<post.length;i++){
    comments_ref.push(post[i].querySelectorAll(".UFICommentBody"));
comments_ref.push("new_post");
}

comments_text=[];
for(i=0; i<comments_ref.length; i++){
	var x=comments_ref[i];
	if (x!="new_post"){
		for (j=0; j<x.length; j++){
			comments_text.push(x[j].textContent);
		}
	}
	else{
		comments_text.push("new_post");
	}
}

var b = document.createElement('b');
var file = new Blob([ comments_text.toString() ], { type: 'text/plain' });

a.href = URL.createObjectURL(file);
a.download = 'comments_text';
a.click();
