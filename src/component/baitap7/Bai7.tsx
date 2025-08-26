import { Component } from "react";
import "../../styles/lession8.css";
import { products } from "../../product.data";
import type { Product } from "../../product.data";



export default class Bai07 extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <header className="header">
                        <div>Trang chủ</div>
                        <div>Danh sách sản phẩm</div>
                        <div

                        >
                            Giỏ hàng <span>(3)</span>
                        </div>
                    </header>
                    <main className="list-produce">
                        {products.map((p) => (
                            <div key={p.id} className="item">
                                <img src={p.img} alt="" />
                                <div className="produce-name">{p.name}</div>
                                <div className="prodcue-price">
                                    {p.price.toLocaleString("vi-VN")}
                                </div>
                                <button
                                    className="btn-add-to-cart"
                                >
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        ))}
                    </main>
                    <div className="cart">
                        <h2>Cart</h2>
                        <div className="item-group">
                            <div className="item">
                                <div className="produce-infor">
                                    <img alt="" />
                                    <div>Phon</div>
                                </div>
                                <div className="cart-action">
                                    <div >
                                        -
                                    </div>
                                    <div>1</div>
                                    <div>
                                        +
                                    </div>
                                </div>
                                <div >
                                    Xóa
                                </div>
                            </div>
                        </div>
                        <div className="cart-total">
                            100VND
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
