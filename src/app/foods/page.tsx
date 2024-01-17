
import FoodNav from '@/components/foodnav/foodnav'
import Style from './foods.module.css'
import Image from 'next/image'
import FoodSidebar from '@/components/foods_sidebar/sidebar'
export default function Foods(){
    return(
        <main id={Style.main} className='  relative mt-24 w-screen'>
            <FoodNav/>
            <div id={Style.page1} className='  flex  max-sm:flex-col'>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2015/10/22/18/58/chicken-1001767_1280.jpg' alt='Chicken Roasted' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:200tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2016/03/05/20/07/abstract-1238657_1280.jpg' alt='Mutton_roasted' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Mutton Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:250tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>   
            </div>


            
            <div id={Style.page2} className='  flex  max-sm:flex-col'>
                
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2021/09/29/14/38/hyderabadi-chicken-korma-6667608_1280.jpg' alt='Chicken_corma' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Corma</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:400tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_1280.jpg' alt='chicken_fry' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Chicken Fry</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:350tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>   
            </div>


            <div id={Style.page3} className='  flex  max-sm:flex-col'>
                
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_1280.jpg' alt='Chicken_Tikka' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Tikka</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:250tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_1280.jpg' alt='meet_with_potato' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Chicken Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:450tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>

            </div>
            <div id={Style.page4} className='  flex max-sm:flex-col '>
                
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_1280.jpg' alt='Chicken_Tikka' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Tikka</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:250tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_1280.jpg' alt='meet_with_potato' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Chicken Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:450tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>

            </div>




            <div id={Style.page5} className='  flex max-sm:flex-col '>  
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_1280.jpg' alt='Chicken_Tikka' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Tikka</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:250tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_1280.jpg' alt='meet_with_potato' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Chicken Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:450tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>
            </div>

            <div id={Style.page6} className='  flex max-sm:flex-col '>  
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_1280.jpg' alt='Chicken_Tikka' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Tikka</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:250tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_1280.jpg' alt='meet_with_potato' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Chicken Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:450tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>
            </div>




            
            <div id={Style.page7} className='  flex max-sm:flex-col '>  
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_1280.jpg' alt='Chicken_Tikka' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Tikka</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:250tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_1280.jpg' alt='meet_with_potato' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Chicken Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:450tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>
            </div>




            
            <div id={Style.page8} className='  flex  max-sm:flex-col'>  
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_1280.jpg' alt='Chicken_Tikka' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Tikka</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:250tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_1280.jpg' alt='meet_with_potato' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Chicken Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:450tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>
            </div>




            
            <div id={Style.page9} className='  flex  max-sm:flex-col'>  
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_1280.jpg' alt='Chicken_Tikka' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Tikka</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:250tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_1280.jpg' alt='meet_with_potato' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Chicken Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:450tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>
            </div>




            
            <div id={Style.page10} className=' flex max-sm:flex-col'>  
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5 flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2015/06/30/22/51/steak-826961_1280.jpg' alt='Chicken_Tikka' width={500} height={500} id={Style.image}/>
                        <h1 className=' sm:text-xl md:text-2xl font-semibold'>This is Chicken Tikka</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' sm:text-xl lg:text-xl pt-2 font-mono'>price:250tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md text-xl  font-semibold'>buy</button>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div id={Style.imagediv} className=' gap-2 pl-5 pr-5 pt-5  flex flex-col items-center h-full'>
                        <Image src='https://cdn.pixabay.com/photo/2019/08/26/22/04/steak-4432946_1280.jpg' alt='meet_with_potato' width={500} height={500} id={Style.image}/>
                        <h1 className='sm:text-xl md:text-2xl font-semibold'>This is Chicken Roasted</h1>
                        <p id={Style.descriptions} className=' font-light lg:pr-10 lg:pl-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat aliquid beatae reprehenderit reiciendis ipsa laboriosam, odit, natus aut, quasi molestiae nulla commodi. Similique temporibus iste nobis quo aliquam ipsa! Lorem ipsum dolor sit amet <br/> consecteturenim quasi dolorem distinctio</p>
                        <h1 className=' lg:text-xl sm:text-xl  pt-2 font-mono'>price:450tk</h1>
                        <button id={Style.btn} className=' bg-green-500 w-40 h-10 rounded-md  text-xl  font-semibold'>buy</button>
                    </div>
                </div>
            </div>
           
                <FoodSidebar/>
            
            <div id={Style.footer}className=' bg-pink-200'>
                    <div>top</div>

                    <div>bottom par</div>
            </div>

        </main>
    )
}