import React, { useEffect, useState } from 'react'
import Style from'./Home.module.css'
import axios from 'axios'

export default function Home() {
    const [products, setproducts] = useState([])
    const [filterdProducts, setfilterdProducts] = useState([])
    const [loading, setloading] = useState(true)
    const [category, setcategory] = useState('All')

    const ApiUrl ="https://it-gate-academy.up.railway.app";

    useEffect(()=>{
      const fetchProducts = async ()=>{
        try{
            let {data} = await axios.get(`${ApiUrl}/api/products`);
            const fetchedProducts = data.products
            setproducts(fetchedProducts)
            setfilterdProducts(fetchedProducts)
            setloading(false)
        }catch(err){
            console.log(err);
        }
      }
      fetchProducts();
    },[])

    const filterCategory = (cat)=>{
          setcategory(cat);
          if (cat === 'All') {
            setfilterdProducts(products)
          }else{
            const filterd = products.filter(p=>p.category === cat);
            setfilterdProducts(filterd)
          }
    }
if (loading) return (
  <div className='flex flex-col justify-center items-center h-96'>
    <div className='animate-spin rounded-full h-12 w-12 border-b -2 border-blue-600'></div>
    <p>....... جاري تحميل المنتجات </p>
  </div>
)
    
    
  return (
    <>
                 <div className="container mx-auto p-6 lg:ml-14 mt-6">
                    <div className='flex  justify-center gap-2 flex-wrap'>
                        {['All','Electronics','Laptops','Fashion','Home & Kitchen','Beauty','Medical Supplies'].map(cat=>(
                          <button key={cat} onClick={()=>filterCategory(cat)} className={`px-5 py-2 rounded-full ${category === cat?'bg-blue-600 text-white shadow-lg':'bg-white text-gray-600 '}`}>

                              {cat}

                          </button>
                        ))
                        }
                    </div>


                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                             {filterdProducts.map((product) => (
                                <div key={product._id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 flex flex-col ">
                                      <div className="relative overflow-hidden rounded-xl h-52 mb-4">
                                        <img src={`${ApiUrl}${product.image}`} alt=""  className='w-full h-full object-cover'/>
                                      </div>
                                      <h3 className='font-bold text-gray-800 '>{product.name}</h3>
                                      <p className='text-gray-500 text-xs mt-1 mb-4 '>{product.description}</p>
                                      <div className='flex justify-between items-center mt-auto'>
                                        <span className='text-xl font-black text-green-600 px-2 py-1 rounded'>{product.price} EG</span>
                                        <span> ★ {product.rating}</span>
                                      </div>
                                      <button className='mt-4 w-full bg-black text-white py-2 rounded-lg font-bold'>Add Product</button>
                                </div>
                          
                            

                      
                    ))}
                        </div>
                 </div>
  
    </>
  )
}
