# Controller
 
 Gerar um novo controller com a CLI
```bash 
  nest g controller <controller name> 
```

# Express decorator 

  O framework recomendar usar os decorator para facilitar a manipulação

| @Request()        | req |
| ------------- |:-------------:| 
| @Response(), @Res()*     |res | 
| @Next()    | next      | 
| @Session() |req.session    | 
| @Param(key?: string) |req.params / req.params[key]   | 
| @Body(key?: string) |req.body / req.body[key]    | 
| @Query(key?: string) |req.query / req.query[key]    | 
| @Headers(name?: string) |req.headers / req.headers[name]    | 
| @Ip() |req.ip    | 

<br />

# Get param request

```typescript
@Get(':id')
findOne(@Param('id') id): string {
  return `This action returns a #${id} cat`;
}

```

# Customizar Route parameters /  Status code / Header / Redirection

```typescript
@Get(':id')
findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
```

```typescript
@Post()
@HttpCode(204)
create() {
  return 'This action adds a new cat';
}
```

```typescript
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}
```

```typescript
@Get()
@Redirect('https://nestjs.com', 301)
```