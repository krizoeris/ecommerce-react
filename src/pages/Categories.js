import React, {useState} from 'react'
import ProductLayout from '../components/ProductLayout'
import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFilter'
import { ReactComponent as LoadingAnimation} from '../img/loading.svg'

const Categories = (prop) => {
    //Local State
    const [state, setState] = useState({ 
        loaded: false,

        models: [],
        brands: [],
        products: [],

        showFilterTab: false,
        filters: {
            models: [],
            brands: []
        }
    })

    // Products fetch collections
    const loadCollections = collections => {
        const collect = []

        collections.map(collection =>
            collect.push(fetch(process.env.REACT_APP_BACKEND_URL+collection+'/all').then(response => response.json()))
        )

        return collect;
    }
    
    // Collect the block of fetch
    Promise.all(loadCollections(['product', 'model', 'brand']))
    .then(response => {
        if(state.products.length === 0) {
            setState({
                ...state,
                products: response[0],
                models: response[1],
                brands: response[2],
                loaded: true, 
            })
        }
    })

    //Toggle filter tab
    const toggleFilter = () => {
        if(state.showFilterTab === false) {
            setState({...state, showFilterTab: true})
        } else if(state.showFilterTab === true) {
            setState({...state, showFilterTab: false})
        }
    }

    //Filter functionality
    const handleFilter = (item, filter) => {
        let stateFilter = state.filters[filter]

        if(item.checked){
            stateFilter.push(item.value)
            setState({...state, filters: {...state.filters, [filter]: stateFilter}})
        }else{
            stateFilter = stateFilter.filter(product => product !== item.value)
            setState({...state, filters: {...state.filters, [filter]: stateFilter}})
        }
        
        console.log(stateFilter)
    }

    let filters = state.products

    if(state.filters.models.length > 0 && state.filters.brands.length > 0) {
        //If brands and models are filtered
        filters = filters.filter(product => state.filters.models.includes(product.model) && state.filters.brands.includes(product.brand))
    } else if(state.filters.models.length > 0 && state.filters.brands.length <= 0) {
        //If model only is filtered
        filters = filters.filter(product => state.filters.models.includes(product.model))
    } else if(state.filters.models.length <= 0 && state.filters.brands.length > 0) {
        //If brand only is filtered
        filters = filters.filter(product => state.filters.brands.includes(product.brand))
    }

    return (
        <div className="container mt-4">
            <h3 className="mb-4">All Products</h3>
            <div className="row mt-4">
                {!state.showFilterTab &&
                <div className="col-md-3">
                    <ProductFilter models={state.models} brands={state.brands} handleFilter={handleFilter} />
                </div>
                }
                <div className={(state.showFilterTab) ? "col-md-12" : "col-md-9"}>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-outline-secondary btn-sm" onClick={toggleFilter}>
                            <i className="fa fa-filter"></i> {(state.showFilterTab) ? "Show" : "Hide"} filter
                        </button>
                        <span className="text-secondary">{filters.length} items found</span>
                    </div>
                    <hr />
                    {(state.loaded === false) &&
                            <div style={{marginTop:"100px"}}><LoadingAnimation /></div>
                    }
                    <ProductLayout>
                        { 
                            filters.map(prod => (
                                <ProductCard 
                                    id={prod._id}
                                    name={prod.name}
                                    price={prod.price}
                                    images={prod.images}
                                    height={(state.showFilterTab) ? "260px" : "200px"}
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