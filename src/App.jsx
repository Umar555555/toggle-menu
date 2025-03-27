import './App.css'
import { useState } from 'react'

function App(){
  const [trueactive, istrue] = useState(false)
  const [trueburger, ontrue] = useState(false)

  const toggleActive = ()=>{
    istrue((prevState)=> !prevState)
  }
  const showBurger =()=>{
    ontrue((item) => !item)
  }
  const closeBurger =()=>{
    ontrue((items) => items = false)
  }

  return(
    <div>
    <div className={`block-con ${trueactive && 'active'}`}>
      <div className={`brand ${trueactive && 'active'}`}>Menu</div>
      <div className={`lefts ${trueburger && 'act'}`}>
      <ul className={`ul ${trueactive && 'active'}`}>
        <li className={`ul-li ${trueactive && 'active'}`}>Home</li>
        <li className={`ul-li ${trueactive && 'active'}`}>Home</li>
        <li className={`ul-li ${trueactive && 'active'}`}>Home</li>
        <li className={`ul-li ${trueactive && 'active'}`}>Home</li>
        <div onClick={closeBurger} className={`close ${trueactive && 'active'}`}></div>
      </ul>
      </div>
      <div className="wraps">
      <div onClick={toggleActive} className={`mode ${trueactive && 'active'}`}></div>
      <div onClick={showBurger} className={`burger ${trueactive && 'active'}`}></div>
      </div>
    </div>
    <div className={`main ${trueactive && 'active'}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, repellat! Quos rerum natus nam enim voluptates possimus. Veritatis delectus accusamus autem doloribus, nihil quae voluptas nisi, ea vel mollitia quisquam?
    Autem officia omnis, rem ratione dolores dolor! Aliquid odio numquam maxime dignissimos nisi laboriosam voluptates, ex, magni eligendi in, ipsam reiciendis nihil a minus quisquam eum possimus nulla architecto esse.
    Pariatur neque quae eos molestiae ullam possimus iure expedita maxime odit non quis reiciendis velit cupiditate rem, sint molestias voluptas nam rerum laudantium recusandae doloribus repellat enim error eius. Deleniti.
    Quisquam, quasi. Nemo qui eum temporibus, ducimus natus nostrum animi! Laudantium quis quisquam, consequuntur deleniti provident tempora maiores ullam quas minima, consectetur, pariatur delectus enim cumque iure earum cum quod?
    Est ducimus cupiditate illo sint autem harum? Ratione, debitis voluptatum? Inventore ex perspiciatis vero dolore consequatur excepturi adipisci amet id repellendus recusandae, expedita ea reprehenderit consectetur velit perferendis minus at.
    Praesentium deserunt dolor dolore commodi? Minus nostrum cumque eveniet, deserunt quod odit labore laborum tempora ipsum veniam error! Quasi, inventore nostrum rem tempora vel sint deleniti quibusdam itaque culpa hic.
    Sunt asperiores perferendis id consequuntur, sequi reiciendis, voluptates nobis, inventore labore corporis doloribus cupiditate voluptatem sit. Accusamus, aliquid. Itaque explicabo, ducimus saepe architecto adipisci dolorem et voluptas cumque voluptates quos.
    Cumque, qui inventore expedita accusamus deserunt minima laboriosam laborum natus, non tempore aliquam, aspernatur voluptate repellat odit iusto tempora porro odio rem exercitationem dignissimos doloremque! Tenetur quae possimus consequatur repellat.
    Ea ipsum expedita enim sapiente temporibus laborum eius animi iste obcaecati modi laudantium culpa tempora dolorum, pariatur distinctio neque voluptate numquam! Consectetur commodi mollitia tempore perferendis nobis nostrum nihil omnis.
    Ea ratione nemo sit ut possimus obcaecati et voluptatum quam accusamus modi vitae laudantium, libero exercitationem at sed, excepturi ducimus, esse nihil! Officia ab sunt dolore eveniet possimus voluptates optio! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita libero ullam sequi! Est earum ut quibusdam quis excepturi, quam nihil explicabo quaerat neque recusandae aspernatur repellat optio, culpa nemo. Recusandae.
    Alias nostrum modi quasi placeat aspernatur dolore, molestias, necessitatibus eius, optio officia quos sint suscipit vero quod odio dolor iure nemo soluta ea! Velit optio repellat ea doloremque, minima incidunt. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</div>
    </div>
  )
}

export default App