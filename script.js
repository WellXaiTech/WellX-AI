*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{
background:#ffffff;
color:#111111;
transition:.3s;
}

header{
padding:20px 60px;
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
}

.logo{
font-size:28px;
font-weight:bold;
}

.logo span{
font-weight:400;
}

nav ul{
display:flex;
list-style:none;
gap:30px;
}

nav ul li a{
text-decoration:none;
color:#111;
font-size:15px;
}

.right{
display:flex;
align-items:center;
gap:20px;
}

.login{
text-decoration:none;
color:#111;
}

.button{
background:#111;
color:#fff;
padding:12px 22px;
border-radius:30px;
text-decoration:none;
}

.hero{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:80vh;
text-align:center;
padding:20px;
}

.small-title{
font-size:16px;
color:#777;
margin-bottom:15px;
}

.hero h1{
font-size:64px;
margin-bottom:35px;
}

.chat-box{
display:flex;
align-items:center;
width:800px;
max-width:95%;
background:#f5f5f5;
border-radius:18px;
padding:8px;
}

.chat-box input{
flex:1;
padding:18px;
border:none;
outline:none;
background:transparent;
font-size:18px;
}

.chat-box button{
width:55px;
height:55px;
border:none;
background:#111;
color:white;
border-radius:15px;
cursor:pointer;
font-size:20px;
}

.actions{
display:flex;
gap:15px;
margin-top:30px;
flex-wrap:wrap;
justify-content:center;
}

.actions button{
padding:14px 20px;
border:none;
background:#f2f2f2;
border-radius:30px;
cursor:pointer;
transition:.3s;
}

.actions button:hover{
background:#111;
color:#fff;
}

@media(max-width:900px){

nav{
flex-direction:column;
gap:20px;
}

nav ul{
flex-wrap:wrap;
justify-content:center;
}

.hero h1{
font-size:40px;
}

}
