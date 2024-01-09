import React from 'react';
import VytvorUzivatel from "./uzivatele/VytvorUzivatel";

function HomePage(props) {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"card"}>
                        <div className={"card-body text-center"}>
                            <h1>Fandovo super kino</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Aenean placerat. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Praesent vitae arcu tempor neque lacinia pretium. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Mauris dictum facilisis augue. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec iaculis gravida nulla. Nunc auctor.</p>

                            <p>Nullam eget nisl. In enim a arcu imperdiet malesuada. Proin mattis lacinia justo. Morbi scelerisque luctus velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur bibendum justo non orci. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Proin in tellus sit amet nibh dignissim sagittis. Fusce wisi. Integer lacinia. Etiam commodo dui eget wisi. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Duis viverra diam non justo. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Etiam egestas wisi a erat. Nam quis nulla. Curabitur vitae diam non enim vestibulum interdum.</p>

                            <p>Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Integer vulputate sem a nibh rutrum consequat. Pellentesque sapien. Nulla non arcu lacinia neque faucibus fringilla. Aenean fermentum risus id tortor. Integer malesuada. Nam quis nulla. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
                            <div className={"d-flex justify-content-around mt-4"}>
                                <button className="btn btn-secondary">
                                    Přihlásit
                                </button>
                                <button className="btn btn-primary">
                                    Registrovat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;