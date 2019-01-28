




   

        {this.props.list.map(function(name){
          return <li>{name}</li>
        }, this)}

        {this.props.list.filter(function(user){
          return user.sameGenre === true
        }).map(function(user){
          return <li>{user.name}</li>
        }, this)}
