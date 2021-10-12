const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true
		},
		extend: {
			animation: {
				text_reveal_1: 'text_reveal .5s ease .5s forwards',
				text_reveal_2: 'text_reveal .5s ease 1.5s forwards',
				text_reaveal_box_1: 'text_reveal_box 1s ease',
				text_reaveal_box_2: 'text_reveal_box 1s ease 1s',
				text_reveal_box_3: 'text_reveal_box 1s ease 2s',
				text_reveal_name: 'text_reveal_name .5s ease 2.5s forwards'
			},
			keyframes: {
				text_reveal_box: {
					'50%': {
						width: '100%',
						left: '0'
					},
					'100%': {
						width: '0',
						left: '100%'
					}
				},
				text_reveal: {
					'100%': {
						color: 'white'
					}
				},
				text_reveal_name: {
					'100%': {
						color: '#6EE7B7',
						fontweight: '500px'
					}
				}
			},
			backgroundImage: {
				'hero-back': "url('src/lib/images/beach.jpeg')"
			}
		}
	},
	plugins: []
};

const colors = require('tailwindcss/colors');
module.exports = {
	theme: {
		colors: {
			green: colors.emerald
		}
	}
};

module.exports = config;
