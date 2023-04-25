import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'

const Favorites = ({myFavorites}) => {
  return (
    <div>
        {myFavorites.map((fav)=>{
            return(
                <Card>
                    id={fav.id}
                    name={fav.name}
                    image={fav.image}

                </Card>
            )
        })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    myFavorites:state.myFavorites
  }
}
export default connect(mapStateToProps,null)(Favorites);