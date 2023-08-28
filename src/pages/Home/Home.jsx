import './home.css'
import Formulaire from '../Formulaire/Formulaire'
import {NavLink} from 'react-router-dom'

function Home(){
    return(
        <div className="projects">
            <h2>Voici quelques uns de nos projets</h2>
            <div className="pics">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="arbre"></img>
                <img src="https://media.istockphoto.com/id/1146517111/fr/photo/mausol%C3%A9e-du-taj-mahal-%C3%A0-agra.jpg?s=612x612&w=0&k=20&c=jfsf7jwrVlGMpFq8F7B45u4RBlzpHUQOubAO0jD4NVI=" alt="palais"></img>
                <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" alt="fleur"></img>
            </div>
            <div className='texts'>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis veniam, asperiores delectus sit impedit facilis architecto possimus harum corrupti quaerat
                    explicabo iusto iure nostrum distinctio praesentium odit consequatur? Illo, adipisci?</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio dicta sed labore illum ducimus laudantium?
                Mollitia ea nulla omnis doloribus ratione, earum distinctio nam accusantium saepe officia odit cum architecto?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet reprehenderit maxime ad in, veniam ipsum quas rerum dolorem ducimus, asperiores cum laudantium eligendi velit sed magni ullam veritatis rem exercitationem enim. Sint odio fugit, optio perferendis soluta iste voluptatem enim fuga voluptatum dolorum ea esse illo,
                suscipit, blanditiis doloribus. Exercitationem provident natus ex! Corrupti dolore impedit ab. Tempora explicabo odio blanditiis a eum. Vero porro minima eaque autem quo numquam aliquid dignissimos veniam totam, cum cupiditate nobis eius optio, voluptatem magnam praesentium commodi nam molestias asperiores reiciendis sit mollitia eum. Exercitationem aliquid est aspernatur cum eum amet blanditiis nulla nobis unde, placeat iure, quos iusto, odio iste quo laudantium vitae! Cupiditate, sed aliquid,
                provident repellat nobis quisquam fugiat eius quaerat, quod iusto quis non obcaecati alias pariatur ad dolorum velit earum 
                neque autem aut. Exercitationem harum voluptates eligendi debitis placeat, obcaecati dolor nostrum dolore ipsum illum sapiente! Placeat, quidem reprehenderit incidunt nihil repellendus explicabo amet, omnis sequi molestiae, ipsam beatae. Eius repudiandae quam maxime assumenda? Expedita aspernatur dignissimos perspiciatis nostrum illum, iusto animi suscipit doloremque sapiente dolorem vel nulla dolore at ab officiis pariatur dolores ut corrupti error. Dignissimos, accusamus nisi ex nemo maiores debitis aliquid consequatur itaque cumque sequi.</p>
            </div>
            <NavLink to='/Formulaire' element={<Formulaire />}>Nous contacter</NavLink>
        </div>
    );
};



export default Home;