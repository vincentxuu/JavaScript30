# JS30-14-Object and Arrays - Reference VS Copy

### 今日重點：
#### 認識JavaScript中數值、字串、陣列與物件的參考(refrence)與複製(Copying)。


--- 

### 學習筆記：

  ```
  //數字與字串的參考與複製
    let age =100;
    let age2= age;
    console.log(age,age2);//100 100

    age = 200 ;
    console.log(age,age2);// 200 100

    let name = 'wes';
    let name2 = name;
    console.log(name ,name2);// wes wes

    name = 'wesley';
    console.log(name,name2);//wesley wes
```
```
  //陣列的參考與複製
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const team = players;
    console.log(players,team);// same

    console.log(team,'team') // ['Wes', 'Sarah', 'Ryan', 'Lux']
    console.log(players,'players') // the same


    const team2 = players.slice();
    console.log(team2,'team2');//['Wes', 'Sarah', 'Ryan', 'Poppy']


    const team3 = [].concat(players);
    console.log(team3,'team3');//['Wes', 'Sarah', 'Ryan', 'Poppy']

    const team4 = [...players];
    team4[3] = 'hee hawww';
    console.log(team4,'team4');//['Wes', 'Sarah', 'Ryan', 'hee hawww'] 

    const team5 = Array.from(players);
    team5[3]='cool'
    console.log(players,'players');//['Wes', 'Sarah', 'Ryan', 'Poppy'] 
    console.log(team5,'team5');//['Wes', 'Sarah', 'Ryan', 'cool']

```
```
  ///物件的參考與複製
    const person = {
      name: 'Wes Bos',
      age: 80
    };
    console.log(person);//{name: 'Wes Bos', age: 80}

    const captain = person;
    captain.number = 99;


    const cap2 = Object.assign({},person ,{number: 99 });
    
    console.log(cap2);//{name: 'Wes Bos', age: 80, number: 99}
    const cap2 = Object.assign({},person ,{number: 99 ,age:12});
    console.log(cap2);//{name: 'Wes Bos', age: 12, number: 99}


    const cap3 = {...person};
    console.log(cap3);//{name: 'Wes Bos', age: 80}


    const wes ={
      name: 'wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
      }
    };

    console.log(wes);//{name: 'wes', age: 100, social: {…}}
  //物件的淺層複製
    const dev =Object.assign({},wes);
    console.log(dev.social);// {twitter: '@wesbos', facebook: 'wesbos.developer'}
    
    dev.social.twitter = '@coolman';
    console.log(dev.social);//{twitter: '@coolman', facebook: 'wesbos.developer'}
    console.log(wes.social);//{twitter: '@coolman', facebook: 'wesbos.developer'}
  //物件的深層複製
    const dev2 = JSON.parse(JSON.stringify(wes));
    console.log(JSON.stringify(wes));//{"name":"wes","age":100,"social":{"twitter":"@wesbos","facebook":"wesbos.developer"}}
    console.log(JSON.parse(JSON.stringify(wes)));//{name: 'wes', age: 100, social: {…}}
    console.log(dev2);//{name: 'wes', age: 100, social: {…}}

    dev2.social.twitter = '@coolman';
    console.log(wes.social);//{twitter: '@wesbos', facebook: 'wesbos.developer'}

```
--- 

## 參考資料
github:
- [14 - JavaScript References VS Copying](https://github.com/guahsu/JavaScript30/tree/master/14_JavaScript-References-VS-Copying)
- [14 JS中的引用与复制](https://github.com/soyaine/JavaScript30/tree/master/14%20-%20JavaScript%20References%20VS%20Copying)

hackmd筆記：[JS30 - Object and Arrays - Reference VS Copy](https://hackmd.io/GyayQv_TSJeRkV-b6lNh8A?view)

鐵人賽文章：[JS30-Day14-JS Reference VS Copy](https://ithelp.ithome.com.tw/articles/10195408)

YT影片：[深入淺出 Javascript30 快速導覽：Day 14：JavaScript References VS Copying](https://www.youtube.com/watch?v=sxe-oahUARI&list=PLEfh-m_KG4dYbxVoYDyT_fmXZHnuKg2Fq&index=14)



