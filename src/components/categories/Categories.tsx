import React from 'react';
import { Props } from './types';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];


const Categories: React.FC<Props> = React.memo(({ selectedCategory, onCategoryClick }) => {

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => {
                        return (
                            <li key={index} className={selectedCategory === index ? 'active' : ''}
                                onClick={() => onCategoryClick(index)}>{category}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
})

export default Categories;