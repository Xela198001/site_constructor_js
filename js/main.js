/* new Swiper('.swiper-container', {
		loop: true,
		navigation: {
			nextEl: '.arrow',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			541: {
				slidesPerView: 2,
				spaceBetween: 40
			}
		}
	});

	const menuButton = document.querySelector('.menu-button');
	const menu = document.querySelector('.header');
	menuButton.addEventListener('click', function () {
		menuButton.classList.toggle('menu-button-active');
		menu.classList.toggle('header-active');
	})
*/

const getElement = (tagName, classNames, attributes) => {
  const element = document.createElement(tagName);

  if (classNames) {
    element.classList.add(...classNames);
  }

  if (attributes) {
    for (const attribute in attributes) {
      element[attribute] = attributes[attribute];
    }
  }

  return element;
};

const createNav = (links) => {
  const nav = getElement('nav', ['menu-list']);
  // const link = getElement('a', ['menu-link']);
  const allMenuLink = links.map((item) => {
    const link = getElement('a', ['menu-link']);

    link.href = item.link;
    link.textContent = item.title;

    return link;
  });

  nav.append(...allMenuLink);

  return nav;
};

const createHeader = (param) => {
  const header = getElement('header');
  const container = getElement('div', ['container']);
  const wrapper = getElement('div', ['header']);

  if (param.header.logo) {
    const logo = getElement('img', ['logo'], {
      src: param.header.logo,
      alt: 'логотип ' + param.title,
    });
    wrapper.append(logo);
  }

  if (param.header.menu) {
    wrapper.append(createNav(param.header.menu));
  }

  if (param.header.social) {
    const socialWrapper = getElement('div', ['social']);
    const allSocial = param.header.social.map((item) => {
      const socialLink = getElement('a', ['social-link']);
      socialLink.append(
        getElement('img', [], {
          src: item.image,
          alt: item.title,
        })
      );

      socialLink.href = item.link;

      return socialLink;
    });

    socialWrapper.append(...allSocial);
    wrapper.append(socialWrapper);
  }

  header.append(container);
  container.append(wrapper);

  return header;
};

const movieConstructor = (selector, options) => {
  const app = document.querySelector(selector);
  document.querySelector('title').textContent = 'Ведьмак';

  if (options.header) {
    app.append(createHeader(options));
    app.classList.add('body-app');
    console.log(getElement('title'));
  }
};

movieConstructor('.app', {
  title: 'Ведьмак',
  header: {
    logo: 'witcher/logo.png',
    social: [
      {
        title: 'Twiter',
        link: '#',
        image: 'witcher/social/twitter.svg',
      },
      {
        title: 'Instagram',
        link: '#',
        image: 'witcher/social/instagram.svg',
      },
      {
        title: 'Facebook',
        link: '#',
        image: 'witcher/social/facebook.svg',
      },
    ],
    menu: [
      {
        title: 'Описание',
        link: '#',
      },
      {
        title: 'Трейлер',
        link: '#',
      },
      {
        title: 'Отзывы',
        link: '#',
      },
    ],
  },
});
