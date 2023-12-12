import { useParams } from 'react-router-dom';


export function CategoryPage() {
    let { categoryName } = useParams();
    const decodedName = decodeURIComponent(categoryName);

    console.log(decodedName);
}