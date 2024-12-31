import {profileData} from './profile';

const mostRecentJobTitle = profileData[0].items[0].title;

export const bioData = {
	name: 'Nicholas Adamou',
	avatar: '/nicholas-adamou.jpeg',
	jobTitle: mostRecentJobTitle,
	website: 'https://nicholasadamou.com',
	about:
		'Seasoned senior software engineer with over 5+ years of experience and a certified expert in cloud-native applications, Python, Java, and JavaScript. Widely promoted developer experience, testing culture, and mentorship. Conducted workshops and mentoring circles; conducted over 20+ interviews; mentored and guided 20+ junior developers. Passionate about driving impactful technical solutions, with a mission to make the world better through code.',
	contacts: [
		{
			label: 'Email',
			value: 'nicholas.adamou@outlook.com',
			href: 'mailto:nicholas.adamou@outlook.com',
		},
		{
			label: 'Github',
			value: 'nicholasadamou',
			href: 'https://github.com/nicholasadamou',
		},
		{
			label: 'LinkedIn',
			value: 'nicholas-adamou',
			href: 'https://linkedin.com/in/nicholas-adamou',
		},
		{
			label: 'Resume (PDF)',
			value: 'Resume',
			href: 'https://tinyurl.com/nicholas-adamou-resume',
		}
	],
}
