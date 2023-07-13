import elixirBG from '../assets/elixirBG.jpg'
export default function SingleTemplate() {


    const templateOverlay = {
        position: 'relative',
        zIndex: 2,
    }
    const divStyle = {
        backgroundImage: `url('https://i.imgur.com/QuJqHP1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '100vh',

    };

    return (
        <>
            <div style={divStyle}>
                <section class="hero is-fullheight is-default is-bold">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <div class="columns is-vcentered">
                                <div class="column is-5">
                                    <figure class="image is-4by3">
                                        <img src="https://picsum.photos/800/600/?random" alt="Description" />
                                    </figure>
                                </div>
                                <div class="column is-6 is-offset-1">
                                    <h1 class="title is-2">
                                        Superhero Scaffolding
                                    </h1>
                                    <h2 class="subtitle is-4">
                                        Let this cover page describe a product or service.
                                    </h2>
                                    <br />
                                    <p class="has-text-centered">
                                        <a class="button is-medium is-info is-outlined">
                                            Learn more
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


