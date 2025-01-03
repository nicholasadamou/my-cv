import React from "react";

import {ProfileDataProps} from '@/data/profile'

export const Profile: React.FC<ProfileDataProps> = ({title, items}) => {
	return (<section className='my-14 text-sm'>
			<h3 className='mb-6'>{title}</h3>
			<div className='flex flex-col gap-6'>
				{items.map((item, index) => {
					return (<div className='flex' key={index}>
							<div className='text-muted-foreground mr-2 md:mr-8 w-full max-w-[100px]'>
								{item.date}
							</div>
							<div className='flex flex-1 flex-col gap-1'>
								<h4>{item.title}</h4>
								{item.link && (<a
										href={item.link}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex hover:underline'
									>
										{item.linkText}
									</a>)}
								{item.subTitle && (<p className='text-muted-foreground'>{item.subTitle}</p>)}
								{item.description ? (<p className='text-muted-foreground'>
										{item.description}
									</p>) : null}
							</div>
						</div>)
				})}
			</div>
		</section>)
}
