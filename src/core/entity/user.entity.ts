import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

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

	@CreateDateColumn()
	createdAt: Date;
}
