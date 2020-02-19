import React from 'react'

const ProductFilter = (prop) => {

    const filteredCategory = []

    const FilterCategory = val => {
        if(val.target.checked){
            filteredCategory.push(val.target.value)
        }else{
            filteredCategory.filter(category => category != val.target.value)
        }
        console.log(filteredCategory)
    }

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
                                    <input type="checkbox" id={`category${key}`} class="mr-2" value={category} onChange={FilterCategory} />
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
                                    <input type="checkbox" id={`brand${key}`} class="mr-2" value={key} />
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