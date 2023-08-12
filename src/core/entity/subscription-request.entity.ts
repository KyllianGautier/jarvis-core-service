import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class SubscriptionRequest implements SubscriptionRequest {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({
		name: 'email',
		unique: true
	})
	email: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	message: string;

	@Column({
		type: 'enum',
		enum: Language
	})
	language: Language;

	@Column({
		type: 'enum',
		enum: Theme
	})
	theme: Theme;

	@CreateDateColumn()
	createdAt: Date;
}