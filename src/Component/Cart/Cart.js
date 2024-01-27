import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
     total = total + product.price; 
     shipping =shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h4>Oder summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: {total}</p>
                <p>Total Shipping: {shipping}</p>
                <p>Tax: {tax}</p>
                <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;






// 
// how react works?
// (১.রিঅ্যাক্ট হল একটি ওপেন-সোর্স জাভাস্ক্রিপ্ট লাইব্রেরি যা করা হয়েছে ব্যবহারকারীর ইন্টারফেস তৈরি করার জন্য, বিশেষ করে একক-পৃষ্ঠার অ্যাপ্লিকেশন এবং মোবাইল অ্যাপ্লিকেশনগুলির জন্য।
// রিয়াক্ট হলো ভ্যারচুয়াল ডম, এ্যকচুয়াল ডমের কপি।
// ২.রিয়াক্ট বানানো হয়েছে মূলত কম্পোনেন্ট ধারণা থেকে আর কম্পোনেন্ট হলো রিয়াক্টের এক একটি ব্লক। চাইলে রিয়াক্ট ফাংশন কম্পোনেন্ট ব্যবহার করে ফাংশান তৈরি করা যায়।
// ৩.রিয়াক্ট ডম আপডেট করার জন্য একটি ভার্চুলাল ডম ব্যবহার করে। কিন্তু প্রকৃত ডম আপডেট করে না।)
// props vs state(প্রপস মূলত পারেন্ট থেকে চাইল্ড কম্পোনেন্টে ডাটা প্রেরনের জন্য ব্যবহার করা হয় আর স্টেট একটি উপাদানের ডেটা পরিচালনা করতে ব্যবহার হয়)
// 

