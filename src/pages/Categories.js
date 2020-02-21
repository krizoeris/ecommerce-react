import React, {useState} from 'react'
import ProductLayout from '../components/ProductLayout'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFilter'

const Categories = (prop) => {
    const products = [
        { id: 1, name: 'iPhone 11', category: 'Phones', brand: 'Apple', inStock: true, price: 4000, image:"https://media.wired.com/photos/5b22c5c4b878a15e9ce80d92/master/pass/iphonex-TA.jpg" },
        { id: 2, name: 'Galaxy Note', category: 'Phones', brand: 'Samsung', inStock: true, price: 3500, image:"https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-note/pdp/sm-n950/midnight-black/Note8-Front-S-Pen-Midnight-Black-1.jpg?$product-details-jpg$" },
        { id: 3, name: 'Google Pixel', category: 'Laptop', brand: 'Google', inStock: true, price: 3500, image:"https://www.gizmochina.com/wp-content/uploads/2018/03/aa.png" },
        { id: 4, name: 'iPad Mini', category: 'Tablet', brand: 'Apple', inStock: true, price: 2000, image:"https://assets.entrepreneur.com/content/3x2/2000/20200116205943-Ent-iPad.jpeg" },
    ]

    const categories = ['Phones', 'Tablet', 'Laptop']

    const brands = ['Apple', 'Samsung', 'Google']

    const filterStatus = { 
        show: true,
        categories: [],
        brands: []
    }

    let filters = products

    const [filterState, setFilterState] = useState(filterStatus)

    const toggleFilter = () => {
        if(filterState.show === false) {
            setFilterState({...filterState, show: true})
        } else if(filterState.show === true) {
            setFilterState({...filterState, show: false})
        }
    }

    const handleFilter = (item, filter) => {
        let stateFilter = filterState[filter]

        if(item.checked){
            stateFilter.push(item.value)
            setFilterState({...filterState, [filter]: stateFilter})
        }else{
            stateFilter = stateFilter.filter(product => product !== item.value)
            setFilterState({...filterState, [filter]: stateFilter})
        }
        console.log(stateFilter)
    }

    if(filterState.categories.length > 0 && filterState.brands.length > 0) {
        filters = filters.filter(product => filterState.categories.includes(product.category) && filterState.brands.includes(product.brand))
    } else if(filterState.categories.length > 0 && filterState.brands.length <= 0) {
        filters = filters.filter(product => filterState.categories.includes(product.category))
    } else if(filterState.categories.length <= 0 && filterState.brands.length > 0) {
        filters = filters.filter(product => filterState.brands.includes(product.brand))
    }

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Categories</h3>
            <div className="row mt-4">
                {!filterState.show &&
                <div className="col-md-3">
                    <ProductFilter categories={categories} brands={brands} handleFilter={handleFilter} />
                </div>
                }
                <div className={(filterState.show) ? "col-md-12" : "col-md-9"}>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-secondary btn-sm" onClick={toggleFilter}>
                            <i className="fa fa-filter"></i> {(filterState.show) ? "Show" : "Hide"} filter
                        </button>
                        <span className="text-secondary">{products.length} items found</span>
                    </div>
                    <hr />
                    <ProductLayout>
                        { 
                            filters.map(product => (
                                <ProductCard 
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    height={(filterState.show) ? "200px" : "150px"}
                                    product={product}
                                />
                            ))
                        }
                    </ProductLayout>
                </div>
            </div>
        </div>
    )
}

export default Categories