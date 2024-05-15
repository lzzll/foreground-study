// 抽出公共的渲染数据的方法,避免重复编写
// 封装头部信息
function packageHeaderInfo(heroesJson){
	const header = document.querySelector("header");
	const h1Element = document.createElement("h1");
	h1Element.textContent = heroesJson === null ? "测试加载" : `${heroesJson.squadName}`;
	header.appendChild(h1Element);
	const h2Element = document.createElement("p");
	h2Element.textContent = heroesJson === null ? "测试具体内容加载" : `homeTown is : ${heroesJson.homeTown} ,formed is ${heroesJson.formed}`;
	header.appendChild(h2Element);
	
}

// 封装正文内容信息 <section>  + (<article>...) 
// <article> + (<p> + <p> + <p> + <ul>)
// <ul> + (<li>)
function packageSectionInfo(heroesJson){
	const section = document.querySelector("section");
	const members = heroesJson.members;
	if(members !== null && members.size !== 0){
		// let...of...遍历获取的值是对象
		for (let member of members) {
			console.info(member);
			const article = document.createElement("article");
			const h2 = document.createElement("h2");
			const p1 = document.createElement("p");
			const p2 = document.createElement("p");
			const p3 = document.createElement("p");
			// p1.textContent = "姓名:" + member.name;
			h2.textContent = `${member.name}`;
			p1.textContent = "Secret identity: " + member.secretIdentity;
			p2.textContent = `Age: ${member.age}`;
			p3.textContent = "Superpowers:";
			article.appendChild(h2);
			article.appendChild(p1);
			article.appendChild(p2);
			article.appendChild(p3);
			// 获取能力值
			const ul = document.createElement("ul");
			const powers = member.powers;
			if(powers !== null && powers.size !== 0){
				// let...in...遍历获取的值是索引
				for (let power in powers) {
					const li = document.createElement("li");
					li.textContent = powers[power];
					ul.appendChild(li);
				}
			}
			article.appendChild(ul);
			section.appendChild(article);
		}
	}
	
}