import { IsString, IsInt, Min, Max, IsEnum, IsEmail, MinLength, IsOptional } from 'class-validator';

export class CreateContestantDto {
  @IsString()
  name: string;

  @IsString()
  nickname: string;

  @IsString()
  origin: string;

  @IsInt()
  @Min(1)
  @Max(100)
  strength: number;

  @IsInt()
  @Min(1)
  @Max(100)
  agility: number;

  @IsInt()
  @Min(0)
  wins: number;

  @IsInt()
  @Min(0)
  losses: number;

  @IsEnum(['Alive', 'Dead', 'Escaped', 'Free'])
  status: 'Alive' | 'Dead' | 'Escaped' | 'Free';

  @IsString()
  @IsOptional()
  dictatorId?: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(12)
  password: string;
}
