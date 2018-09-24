import React, { Component } from 'react';
import { Col, Container, Row } from "mdbreact";
import { connect } from 'react-redux';
import { fetchProducts } from "../../Actions/ProductAction";
import ProductItem from "./ProductItem";
class Products extends Component {
 
    componentWillMount() {
        this.props.fetchProducts();
    }
    render() {
        const error = this.props.error;
        const errorMsg = this.props.errorMsg;

        const productItems = this.props.products.map(item => (
            <ProductItem id={item.id} data={item} />
        ));
        /*
        if (error) {
            return (
                <Container>
                    <Row>
                        <div>
                            Products fetch faild: {errorMsg}
                        </div>
                    </Row>
                </Container>
            )
        }
        */
        return (
            <Container>
                <Row>
                    <Col md="12" className="mx-auto">
                        <h1 className="display-4 text-center">Products</h1>
                        {productItems}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    error: state.products.error,
    errorMsg: state.products.errorMsg
})
export default connect(mapStateToProps, { fetchProducts })(Products);
