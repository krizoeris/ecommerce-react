import React, {useState} from 'react'
import ProductLayout from '../components/ProductLayout'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFilter'

const Categories = (prop) => {
    const products = []

    const categories = ['Phones', 'Tablet', 'Laptop']

    const brands = ['Apple', 'Samsung', 'Google']

    const filterStatus = { 
        show: true,
        categories: [],
        brands: [],
        products: []
    }

    const [filterState, setFilterState] = useState(filterStatus)

    const loadProducts = () => {
        fetch('http://localhost:3010/product/all')
        .then(response => response.json())
        .then(json => {
            setFilterState({
                ...filterState,
                products: json
            })
        })
    }
    
    if(filterState.products.length === 0) {
        loadProducts()
    }
    
    let filters = filterState.products
    //console.log(filterState.products)

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
                            filters.map(prod => (
                                <ProductCard 
                                    id={prod._id}
                                    name={prod.name}
                                    price={prod.price}
                                    images={prod.images}
                                    height={(filterState.show) ? "200px" : "150px"}
                                    product={prod}
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