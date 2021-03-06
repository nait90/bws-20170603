import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

// import { MOVIE_LIST } from './mock-movie';


@Injectable()
export class MovieService {
	private moviesUrl = 'api/movie';
	private headers = new Headers({'Content-Type' : 'application/json'});
	movieList;
	// movieList : Movie[] = [];
	// private url = 'http://localhost:9000/api/movies';

	constructor(private http: Http) {
		// this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
  //       this.headers.append('Access-Control-Allow-Methods', 'GET');
  //       this.headers.append('Access-Control-Allow-Origin', '*');
	}

	getMovies() : Observable<any> {
		return this.http.get(this.moviesUrl)
			.map(resp => {
				this.movieList = resp.json().movies;
				return resp.json().movies;	
			});


			// .map(res => res.json().movies)
			// .subscribe(movies => this.movieList = movies.slice());

		// return Observable.of(this.movieList);
	}

	getOneMovie(rank: string) : Observable<any> {
		console.log('service: getMovieDetail rank = ' + rank);
		console.log('movieList.length = ' + this.movieList.length);
		return Observable.of(this.movieList.filter(item => item.rank === rank)[0]);
		// return Observable.of(this.movieList.subscribe(list => list.filter(item => item.rank === rank)[0]));
	}
	// getMovies() : Observable<any> {
	// 	console.log(' >>> : ' + MOVIE_LIST.date);
	// 	return Observable.of(MOVIE_LIST.movies);
	// 	// return new Observable<any> (() => {
	// 	// 	setTimeout(() => {MOVIE_LIST;}, 500)
	// 	// });
	// }

	// getOneMovie(rank:string) : any {
	// 	let movies = MOVIE_LIST.movies;
		
	// 	return Observable.of(movies.filter(item => item.rank === rank)[0]);
	// 	// return this.getMovies().subscribe(movieList => {
	// 	// 	let arr : Array<any> =  (movieList.movies) as Array<any>;
	// 	// 	arr.filter(item => item.rank === rank);});
	// }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	_getMovies() : Observable<any> {
		console.log('service : getMovies()');
		return this.http.get(this.moviesUrl)
				 .map(response => response.json());
	}

	_getMovieDetail(name: string) : Observable<any> {
		console.log('service: getMovieDetail');
		return this.http.get(this.moviesUrl + '/' + name)
					.map(response => response.json());
	}

	// getMovie(rank: number) : Observable<Movie> {
	// 	return this.getMovies()
	// 		.map(movies => movies.find(movie => movie.rank === rank));
	// }


	// getMovies() : Promise<Movie[]> {
	// 	console.log('service : getMovies()');
	// 	// return Promise.resolve(MOVIES);
	// 	return this.http.get(this.moviesUrl, {headers: this.headers})
	// 				.toPromise()
	// 				.then(response => {
	// 					console.log('in then');
	// 					var movieList = this.convert(response);
	// 					console.log('movieList.length = ' + movieList.length);
	// 					return Promise.resolve(movieList);
	// 				})
	// 				// .then(response => {
	// 				// 	var movieList = this.convert(response);
	// 				// 	// response.json().data as Movie[]
	// 				// })
	// 				.catch(this.handleError);
	// }

	// getMovie(rank: number): Promise<Movie> {
	// 	return this.getMovies()
	// 			.then(movies => movies.find(movie => movie.rank === rank));
	// }

}
