import React from 'react'

const ProductFilter = (prop) => {

    return(
        <div className="card">
            <div>
                <div className="card-header">
                    Category
                </div>
                <div className="card-body p-0 m-0">
                    <ul class="list-group p-0 m-0">
                        {prop.categories.map((category, key) => (
                            <label for={`category${key}`}>
                                <li class="list-group-item border-0 m-0 pb-0">
                                    <input type="checkbox" id={`category${key}`} class="mr-2" value={category} onChange={(e) => prop.handleFilter(e.target, 'categories')} />
                                    {category}
                                </li>
                            </label>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <div className="card-header border-top">
                    Brands
                </div>
                <div className="card-body p-0 m-0">
                    <ul class="list-group p-0 m-0">
                        {prop.brands.map((brand, key) => (
                            <label for={`brand${key}`}>
                                <li class="list-group-item border-0 m-0 pb-0">
                                    <input type="checkbox" id={`brand${key}`} class="mr-2" value={brand} onChange={(e) => prop.handleFilter(e.target, 'brands')}/>
                                    {brand}
                                </li>
                            </label>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ProductFilter