'use strict';

function LikeButton (){
    const [likedCount, setlikedCount] = React.useState(0);

    React.useEffect(() => {
        console.log('Hola react!');
    }, []);

    return(
        <button onClick={() => setlikedCount(likedCount + 1) }>
            Like: {likedCount}
        </button>
    );
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<LikeButton />, domContainer);