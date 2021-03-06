import React from 'react'
import { Container, Button, Icon, Input, Label  } from 'semantic-ui-react';
import '.././AddForm.css'; 

class AddForm extends React.Component {
    state = { itemName: '', price: 0.00, }
    // state = { itemName: '', price: 0.00, complete: !false }
    handleSubmit = (e) =>{
      e.preventDefault()
      this.props.addItem(this.state)
      // this.props.addItem({itemName: this.state.itemName, price:this.state.price, complete: !this.state.complete})
      this.setState( {itemName: '', price: 0.00,  })
      // this.setState( {itemName: '', price: 0.00, complete: !false, })
    }

    handleChange = (e) =>{
      const {name, value} = e.target
      this.setState({ [name]: value})
      // this.setState({ [name]: value, complete: !this.state.complete})
    }

    render(){
      const { itemName, price, complete } = this.state
      return(
        <Container>
          <Label as='a' color='blue' ribbon>
            Add List Item
          </Label>
        <form onSubmit={this.handleSubmit}>
        <Input size='large'>
        <input 
          placeholder="Add List Item"
          value={itemName}
          name="itemName"
          onChange={this.handleChange}
        />
        </Input>
        <br/>       
        <Input labelPosition='right' type='text' placeholder='Amount'>
        <Label basic>$</Label>
        <input 
          placeholder="Add List Item"
          value={price}
          name="price"
          onChange={this.handleChange}
        />
        <Label>.00</Label>
        </Input>
        <br/>
        {/* <Input>
        <Label>Mark Complete</Label>
          <input 
            type="checkbox"
            //defaultChecked={complete}
            value={complete}
            name="complete"
            onChange={this.handleChange}
          />
        </Input> */}
        <Button color="green">Add to list <Icon name="add circle"/></Button>
      </form>
      </Container>
      )
    }
}

export default AddForm