import React from "react";

const Card = ({ title, link1, link2, link3, link4 }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
    <div className="col">
      <div className="card">
        <img src="https://i.pinimg.com/236x/0c/38/8d/0c388d6a4c00ba806b68577928db111d.jpg" className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"> Classic Porcelain Teapot</h5>
          <p className="card-text">
         
          This elegant teapot features a timeless porcelain design with a smooth white finish. Its classic shape and graceful spout make it perfect for serving tea at formal gatherings or casual tea times. 
          </p>
          <div class="card-footer text-muted">
          <a href="#" class="btn btn-primary">Find out more</a>
  </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card mb-3 pb">
        <img src="https://i.pinimg.com/236x/e1/c8/71/e1c8710afd4140ecb9bb10e8119fd8aa.jpg" className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">  Vintage Cast Teapot</h5>
          <p className="card-text">
        
          Embrace traditional tea brewing with this vintage-inspired cast iron teapot. Its robust construction and intricate floral patterns not only enhance its aesthetic appeal but also help to retain heat 
          </p>
          <div class="card-footer text-muted">
          <a href="#" class="btn btn-primary">find out more</a>
  </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://i.pinimg.com/236x/08/72/ba/0872ba10fca0c04f577c0f1f3c223dce.jpg" className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title"> Modern Glass Teapot</h5>
          <p className="card-text">
         
          Enjoy a contemporary tea experience with this sleek glass teapot. The transparent body allows you to observe the tea's color as it brews, and the removable infuser makes it easy
          </p>
          <div class="card-footer text-muted">
          <a href="#" class="btn btn-primary">Find out more</a>
         </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card ps-3">
        <img src="https://i.pinimg.com/236x/94/67/cc/9467cca7adee9e759e211fae47270830.jpg" className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Whimsi Ceramic Teapot</h5>
          <p className="card-text">
          
          Add a touch of whimsy to your tea routine with this playful ceramic teapot. Featuring a vibrant, hand-painted design and a unique, playful shape, it's a delightful conv
          </p>
          <div class="card-footer text-muted">
          <a href="#" class="btn btn-primary">Find out more</a>
  </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Card;
