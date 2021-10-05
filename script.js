async function foo1(){
    let data=await fetch ('https://api.github.com/users/octocat/repos');
    let result=await data.json();
    console.log(result.name); 
let data1=await fetch ('https://api.github.com/repos/octocat/hello-world/forks');
await octokit.request('POST /repos/{owner}/{repo}/forks', {
    owner: 'octocat',
    repo: 'hello-world',
    organization: 'organization'
    
  })
console.log(data1);
foo1()
}


          